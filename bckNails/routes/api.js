const express = require('express');
const router = express.Router();

let passport = require('passport');
let passportJWT = require('passport-jwt');

let extractJWT = passportJWT.ExtractJwt;
let strategyJWT = passportJWT.Strategy;

passport.use(
    new strategyJWT(
      {
        jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
      },
      (payload, next)=>{
         var user = payload;
         return next(null, user);
      }
    )
  )
  const heartBeat = (req, res)=>{
    res.status(200).json({ok:true});
  }

  const jwtAuthMiddleware = passport.authenticate('jwt', {session:false});

const SeguridadRoute = require('./api/seguridad');
const serviciosRoute = require('./api/serviciosdb');
const CitasRoute = require('./api/citas');



    router.get('/version',(req,res) =>{
    let versionObj = {
    app:"simple eccomerce seccoom api",
    version:"1.0.0.0.0",
    status:"alpha"
    }

    res.status(200).json(versionObj);
});

router.use('/seguridad',SeguridadRoute)
router.use('/citas',jwtAuthMiddleware,CitasRoute)
router.get('/heartbeat', jwtAuthMiddleware, heartBeat);
router.use('/servicios',jwtAuthMiddleware ,serviciosRoute);

module.exports = router;