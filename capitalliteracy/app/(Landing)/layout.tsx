// Having separate files for headers and footers stops me from needing to re-render them. 
// The idea is that everything will extend from the landing.
import { Header } from "./header";
import { Footer } from "./footer";


type Props = {
    children: React.ReactNode;
};

const landingLayout = ({children}: Props) => {
    return(
        <div className= "min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default landingLayout;
