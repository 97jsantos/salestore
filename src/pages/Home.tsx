import { AllTheProducts } from "../homecontents/AllTheProducts";
import { SlideProducts } from "../homecontents/SlideProducts";

export function Home() {
    return (
        <div className="min-h-screen">
            <SlideProducts />
            <AllTheProducts />
        </div>
    )
}