import { Animate } from "./animate";

const Accordeon = {
	init({
			classItem: item,
			classTitle: title,
			classBody: body,
			classActive: active
		}) {
		this.accItems = document.getElementsByClassName(item);
		this.classTitle = title;
		this.classBody = body;
		this.classActive = active;
		this.duration = 400;

		return Accordeon.run();
	},

	run() {
		document.addEventListener("click", function(event) {
			event = event || event.window;

			if(event.target.classList.contains(Accordeon.classTitle)) {
				let activeItem = event.target.parentNode;

				if(activeItem.classList.contains(Accordeon.classActive)) {
					Accordeon.closeAll();
				} else {
					Accordeon.closeAll();
					Accordeon.toggleClass(activeItem);
				}
			}
		});
	},

	toggleClass(el) {
		if(el.classList.contains(Accordeon.classActive)) {
			Accordeon.closeItem(el);
		} else {
			el.classList.add(Accordeon.classActive);
			Accordeon.animateOpen(el);
		}
	},

	closeItem(el) {
		Accordeon.animateCloce(el);
		el.classList.remove(Accordeon.classActive);
		el.removeAttribute("style");
	},

	closeAll() {
		for(let i = 0; i < Accordeon.accItems.length; i++) {
			if(Accordeon.accItems[i].classList.contains(Accordeon.classActive)) {
				Accordeon.closeItem(Accordeon.accItems[i]);
			}
		}
	},

	animateOpen(el) {
		let titleHeight = el.getElementsByClassName(Accordeon.classTitle)[0].scrollHeight;
		let maxHeight   = el.scrollHeight - titleHeight;

		Animate({
			duration: Accordeon.duration,
			timing: function (timeFraction) { return timeFraction; },
			draw: function (progress) {
				el.style.height = progress * maxHeight + titleHeight + "px";
				el.getElementsByClassName(Accordeon.classBody)[0].removeAttribute("style");
			}
		});
	},

	animateCloce(el) {
		let accBody = el.getElementsByClassName(Accordeon.classBody)[0];
		let height  = accBody.scrollHeight;

		Animate({
			duration: Accordeon.duration,
			timing: function (timeFraction) { return timeFraction; },
			draw: function (progress) {
				accBody.style.height = height - (progress * height) + "px";
			}
		});
	}
};

// export
export { Accordeon };