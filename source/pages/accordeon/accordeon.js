// Common styles
import "normalize.css";
import "../main.scss";
// Page styles
import "./accordeon.scss";

// Connect modules
import { Accordeon } from "../../modules/accordeon";

// Run modules
Accordeon.init({
				classItem: "accordeon__item",
				classTitle: "accordeon__title",
				classBody: "accordeon__body",
				classActive: "active"
			});