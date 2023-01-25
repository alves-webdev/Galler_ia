import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import PostSchema from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get all posts
router.route('/').get(async (req, res) => {
  try{
    const posts = await PostSchema.find({});
   res.status(200).json({success: true, data: posts});
  }
    catch (err) {
        console.log(err);
        res.status(500).json({success: false, message: err.message});
    }
});

//create a post
router.route('/').post(async (req, res) => {
   try{
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await PostSchema.create({
        name,
        prompt,
        photo: photoUrl.secure_url,
    });

    res.status(201).json({sucess: true, data: newPost});
   } catch (err) {
         console.log(err);
         res.status(500).json({success: false, message: err.message});
    }
});

export default router;