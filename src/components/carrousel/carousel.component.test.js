import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import { Carousel } from "./carousel.component";
import "../../setupTests";

afterEach(cleanup);
const pictures = ["http://localhost/pic1.jpg", "http://localhost/pic2.jpg", "http://localhost/pic3.jpg"];

describe("Carousel component", () => {
    it("should render images and buttons", () => {
        render(<Carousel pictures={pictures} />);

        const leftArrow = screen.getByTestId("left-arrow");
        const rightArrow = screen.getByTestId("right-arrow");

        expect(screen.getByAltText("Room 1 of 3").src).toBe(`${pictures[0]}`);
        expect(rightArrow).toBeDefined();
        expect(leftArrow).toBeDefined();
        expect(screen.getByTestId("footer")).toHaveTextContent(`1 / ${pictures.length}`);
    });
    

    it("should change images when clicking right arrow", () => {
        render(<Carousel pictures={pictures} />);
        fireEvent.click(screen.getByTestId("right-arrow"));
        expect(screen.getByAltText("Room 2 of 3").src).toBe(`${pictures[1]}`);
        expect(screen.getByTestId("footer")).toHaveTextContent(`2 / ${pictures.length}`);        
    });

    it("should change images when clicking left arrow", () => {
        render(<Carousel pictures={pictures} />);
        const leftArrow = screen.getByTestId("left-arrow");
        fireEvent.click(leftArrow);

        expect(screen.getByAltText("Room 3 of 3").src).toBe(`${pictures[2]}`);
        expect(screen.getByTestId("footer")).toHaveTextContent(`3 / ${pictures.length}`);        
    });

    it("should not render arrows and footer when there is only 1 picture", () => {
        render(<Carousel pictures={[pictures[0]]} />);
        expect(screen.queryByTestId("left-arrow")).toBeNull();
        expect(screen.queryByTestId("right-arrow")).toBeNull();
        expect(screen.queryByTestId("footer")).toBeNull();
    });

    it("should render the first picture when clicking the right arrow from the last picture", () => {
        render(<Carousel pictures={pictures} />);
        for (let i = 1; i <= 3; i++) {
            fireEvent.click(screen.getByTestId("right-arrow"));
        }
        expect(screen.getByAltText("Room 1 of 3").src).toBe(`${pictures[0]}`);
        expect(screen.getByTestId("footer")).toHaveTextContent(`1 / ${pictures.length}`);        
    });
})