export {};

interface CustomSVGSVGElement extends SVGElement {
    y: string;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            // svg: React.SVGProps<CustomSVGSVGElement>;
        }
    }
}
