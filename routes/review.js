const express = require('express');
const router= express.Router({mergeParams: true});
const wrapAsync=require("../utils/wrapAsync.js");
const { validateReview,isLoggedIn,isReviewAuthor } = require('../middleware.js');

const reviewController = require("../controllers/reviews.js");

//POST REVIEW ROUTE
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.post));

//DELETE REVIEW ROUTE
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.delete));

module.exports = router;