import React from "react";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import About from "../src/components/About";
import Service from "../src/components/Service";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";

function App() {
	return (
		<>
			<Nav />
			<Home />
			<Service />
			<About />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
