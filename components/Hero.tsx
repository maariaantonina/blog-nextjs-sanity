import { MainPage } from "lib/sanity.queries";

export default function Hero(props: Pick<MainPage, 'title' | 'subtitle'>) {
    const {title, subtitle} = props;
    return(
        <section>
            {title}
        </section>
    )
}