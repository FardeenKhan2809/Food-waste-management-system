const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/db');
const registrationRoutes = require('./routes/registrationRoutes');
const loginRoutes=require('./routes/apiRoutes');
const sourceTableRoutes = require('./routes/sourceTableRoutes');
const memberRoutes=require('./routes/memberRoutes');
const volunteerRoutes=require('./routes/volunteerRoutes');
const transporterRoutes=require('./routes/transporterRoutes');
const bioWasteRoutes=require('./routes/bioWasteRoutes');
const farmersRoutes=require('./routes/farmersRoutes');
const donationRoutes = require('./routes/donationRoutes');
const foodWasteRequestRoutes=require('./routes/foodWasteRequestRoutes');
const RegularFWRequestRoutes=require('./routes/RegularFWRequestRoutes');
const OccasionalFWRequestRoutes=require('./routes/OccasionalFWRequestRoutes');
const ScheduleRoutes=require('./routes/ScheduleRoutes');
const routeRoutes=require('./routes/routeRoutes');
const CurrentScheduleRoutes = require('./routes/CurrentScheduleRoutes');
const CreateAdmin=require('./routes/adminRoutes');
const CreateClerk=require('./routes/clerkRoutes');
const slurryRequestRoutes = require('./routes/slurryrequestRoutes');
const foodWasteSlurryRoutes = require('./routes/FoodWasteSlurryRoutes');
const slurryDistributionRoutes = require('./routes/slurryDistributionRoutes');
const forgotpasswordRoutes = require('./routes/forgotpasswordRoutes');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(session({
  secret: 'mongodbfwms1',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());
connectDB();

app.use('/',CreateAdmin);
app.use('/',CreateClerk);
app.use('/', registrationRoutes);
app.use('/',loginRoutes);
app.use('/', sourceTableRoutes);
app.use('/', transporterRoutes);
app.use('/',memberRoutes);
app.use('/',volunteerRoutes);
app.use('/', bioWasteRoutes);
app.use('/',farmersRoutes);
app.use('/',donationRoutes);
app.use('/',foodWasteRequestRoutes);
app.use('/',RegularFWRequestRoutes);
app.use('/',OccasionalFWRequestRoutes);
app.use('/',ScheduleRoutes);
app.use('/',routeRoutes);
app.use('/', CurrentScheduleRoutes);
app.use('/', slurryRequestRoutes);
app.use('/api', foodWasteSlurryRoutes);
app.use('/', slurryDistributionRoutes);
app.use('/api', forgotpasswordRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
