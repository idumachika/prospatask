
export const colors = {
	/**
	 * A helper for making something see-thru. Use sparingly as many layers of transparency
	 * can cause older Android devices to slow down due to the excessive compositing required
	 * by their under-powered GPUs.
	 */
	transparent: "rgba(0, 0, 0, 0)",
	primary: "#FA4A84",
	second: "#8397AB",
	white: "#ff",
	text: "#222B45",
}

export type ColorKeys = keyof typeof colors
