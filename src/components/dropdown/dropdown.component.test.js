import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./dropdown.component";
import "../../setupTests";


describe("Dropdown component", () => {
    it("should be closed at first render", () => {
        render(<Dropdown type={`${"medium" || "large"}`} title="test" />);   
        expect(screen.getByTestId("title")).toHaveTextContent("test");
        expect(screen.getByTestId("arrow")).toBeInTheDocument();
    })
    it("should have a medium or large class", () => {
        render(<Dropdown type={`${"medium" || "large"}`} title="test" />);
        expect(screen.getByTestId("dropdown")).toHaveClass(`${"medium" || "large"}`);
    });

    it("should display a title and an arrow", () => {
        render(<Dropdown type={`${"medium" || "large"}`} title="test" />);
        expect(screen.getByTestId("arrow")).toBeInTheDocument();
        expect(screen.getByTestId("title")).toHaveTextContent("test");
    });

    it("should be open after a click on the bar", () => {
        render(<Dropdown type={`${"medium" || "large"}`} title="test" />);
        fireEvent.click(screen.getByTestId("dropdown"));
        expect(screen.getByTestId("arrow")).toHaveClass("open");
        expect(screen.getByTestId("textBox")).toHaveClass("boxOpen");
    });

    it("should be closed after a click on the bar when opened", () => {
        render(<Dropdown type={`${"medium" || "large"}`} title="test" />);
        fireEvent.click(screen.getByTestId("dropdown"));
        fireEvent.click(screen.getByTestId("dropdown"));
        expect(screen.getByTestId("arrow")).not.toHaveClass("open");
        expect(screen.getByTestId("textBox")).not.toHaveClass("boxOpen");
    });
})
