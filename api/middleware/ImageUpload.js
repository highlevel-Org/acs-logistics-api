require('dotenv').config();
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


async function uploadImage(req,res,next) {
    // console.log(req.body);
    try {
        const fileStr =  await req.body.imageUrl;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset:'package_preset'
        });

        if (!uploadResponse) {
            res.status(500).json({err:'Image Upload faild'})

            return;
        }

        req.body.imageUrl =  uploadResponse.url;
        // console.log(uploadResponse);

        next()


        // res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}


async function deleteImage(req,res,next) {
    // console.log(req.body);
    try {
        const fileStr =  await req.body.imageUrl;
        const deletedResponse = await cloudinary.uploader.destroy('zombie', function(result) { console.log(result) })
    
    

        next()


        // res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}


module.exports = uploadImage;


