

const packageModel = require("../../Database/model/package-model");
const {deleteImage}  = require("../../middleware/ImageUpload")






async function getAllShippment(req,res) {
// console.log("this code ran");

try {
	const response = await  packageModel.find({}).populate('user');

	

	// const notes = response.map((note)=>{
	// 	return {...note,user:{password:undefined,token:undefined}}
	// })
	
	return res.send(response)
	
} catch (error) {
	console.log(error)
}




}



async function getAllShippmentByUserId(req,res) {

	const userId = req.params.userId;

	// console.log(userId);
try {
	const response = await  packageModel.find({}).populate('user');
	const shippment = response.filter(({user:{id}})=>id=== userId)
	
	return res.send(shippment)
	
} catch (error) {
	console.log(error)
}




}


	
	


async function PostShippment(req,res) {
    const payload = await req.body;

	// console.log(payload);

	const newShippment = new packageModel(payload);

	newShippment.save().then((createdShippment) => {

		// console.log(createdShippment);
		res.json({
			data: createdShippment,
		});
	});
}




async function getShippment(req,res) {
    const payload = req.params.id;

	console.log({payload});

	packageModel.findById(payload, (err, shippment) => {
		if (err) {
			return console.error(err);
		}

		if (!shippment) {
			return res.status(404).json({
				message: "Shippment not found!",
			});
		}

		res.json({
			shippment,
		});
	});
}



async function getCusterShippmentById(req,res) {
    const payload = req.params.Id;

	packageModel.findById(payload, (err, shippment) => {
		if (err) {
			return console.error(err);
		}

		if (!shippment) {
			return res.status(404).json({
				message: "Shippment not found!",
			});
		}

		res.json({
			shippment,
		});
	});
}






async function updateShippment(req,res) {
    const Id = req.params.id;
    const updateShippment = req.body;
    const options = {new:true}

	packageModel.findByIdAndUpdate(Id,updateShippment,options, (err, shippment) => {
		if (err) {
			return res.status(404).json({
				message: err,
			});
		}
		if (!shippment) {
			return res.status(404).json({
				message: "Shippment not found for updateing",
			});
		}

		return res.json({
			data: shippment,
            message:'Shippment updated successfully'
		});
	});
}





async function deleteShippment(req,res) {
    const Id = req.params.id;

	packageModel.findByIdAndDelete(Id, (err, shippment) => {
		if (err) {
			return res.status(404).json({
				message: err,
			});
		}

		return res.json({
			data: shippment,
            message:'shippment deleted successfully'
		});
	});
}




module.exports = {getAllShippment,
    getAllShippmentByUserId,
    PostShippment,
    getShippment,
    updateShippment,
    deleteShippment,getCusterShippmentById}