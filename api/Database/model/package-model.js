const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
	{
		packageName: { type: String, required: true },
		quantity: { type: Number, required: true },
		description: { type: String },
		weight: Number,
		completed: Boolean,
		imageUrl: { type: String },
		serviceType: String,
		serialNumber: String,
		deliveryDate: { type: Date },
		shippedDate: { type: Date, default: Date.now },
		shippingCost: { type: String },

		origin: {
			senderName: String,
			senderEmail: String,
			senderAddress: String,
			originCordinates: { lat: String, long: String },
		},

		currentLocation: {
			reason: { type: String },
			currentLocationAddress: { type: String },
			currentCordinates: { lat: String, long: String },
		},

		destination: {
			receiverName: String,
			receiverEmail: String,
			receiverPhone: String,
			receiverAddress: String,
			receiverCordinates: { lat: String, long: String },
		},

		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			immutable: true,
		},
	},
	{ timestamps: true }
);

const packageModel = mongoose.model("Package", packageSchema);

module.exports = packageModel;
