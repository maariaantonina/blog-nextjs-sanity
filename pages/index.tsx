import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
import { getAllPosts, getMainPageData, getSettings } from 'lib/sanity.client'
import { MainPage, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

interface PageProps {
  posts: Post[]
  settings: Settings
  mainPageData: MainPage
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { posts, settings, mainPageData, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage posts={posts} settings={settings} mainPageData={mainPageData}/>
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = [], mainPageData] = await Promise.all([
    getSettings(),
    getAllPosts(),
    getMainPageData()
  ])

  return {
    props: {
      posts,
      settings,
      mainPageData,
      preview,
      token: previewData.token ?? null,
    },
  }
}
