import express from "express";
import getAllScreenings from "./getAllScreenings.js";
import getMovieScreenings from "./getMovieScreenings.js";


export default function initApiRouter(cms) {
  const router = express.Router();

  router.get("/screenings", async (req, res) => {
    const screenings = await getAllScreenings(cms);

    res.status(200).json({
      data: screenings,
    });
  });

  router.get("/movies/:movieId/screenings", async (req, res) => {
    const screenings = await getMovieScreenings(cms, req.params.movieId);

    res.status(200).json({
      data: screenings,
    });
  });

  return router;
}
