import React from "react";
import { Snare } from "./Snare";
import { Bassdrum } from "./Bassdrum";
import { HiHat } from "./HiHat";
import { Crash } from "./Crash";
import { AppComponent } from "../storeComponents";
import { Provider } from "mobx-react";
import { DrumsDisplayStore } from "./drumsDisplay";

class Drums_ extends AppComponent {
	drums = new DrumsDisplayStore();

	render() {
		return (
			<Provider drums={this.drums}>
				<svg
					viewBox={`0 0 ${100} ${100}`}
					style={{
						width: "100%",
						height: "100%",
					}}
				>
					<Snare />
					<Bassdrum />
					<HiHat />
					<Crash />
				</svg>
			</Provider>
		);
	}
}

export const Drums = AppComponent.sync(Drums_);
