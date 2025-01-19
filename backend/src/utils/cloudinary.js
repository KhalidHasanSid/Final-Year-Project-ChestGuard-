import {v2 as cloudinary} from 'cloudinary'
import fs  from 'fs'

cloudinary.config({ 
    cloud_name: 'dugxmxdsb', 
    api_key: '226315526672389', 
    api_secret: 'az-S8lXDVrQAHpjSSTupYsizOBM' 
});


const uploadCloudinar= async (filePath)=>{
    try
    {
     if(!filePath) return "no file in the file path"

    const response = await  cloudinary.v2.uploader.upload(filePath,{resource:"auto"})
    console.log("succesfully uploaded  ")
    return response;}

    catch(err){
        fs.unlinkSync(filePath)
    return null;

    }
    }

    export default uploadCloudinar