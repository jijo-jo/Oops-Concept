import http from 'http';
import express, { Express } from 'express';
import routes from './routes/index';
import PortDetails from './class/classDetailPort';
import PersonDetails from './class/classPerson';
import Teacher from './class/classUsers';
import Students from './class/abstractExample';
import Boys from './class/classBoys';
import {Bankacount,BankManager} from './class/encapsulationPractice';


const router: Express = express();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
const newAccount= new Bankacount(1000,2000,123456789);
const newBankManager = new BankManager(3000,10000,975469743);
//const newBoys= new Boys()
const newStudent = new Students("arun",24,"arun@gmail.com",9876543219,"Bharathiya vidhya",9);
const newTeacher = new Teacher("Reena",45,"reena123@gmail.com",9876543219,"science","St. Thomas HSS Nadavayal",50000);
const IPerson = new PersonDetails("Kevin",49,"kevin123@gmail.com",9400490966);
const view = new PortDetails(4000);
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {

        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');

        return res.status(200).json({});

    }

    next();

});

router.use('/', routes);

router.use((req, res, next) => {

    const error = new Error('not found');

    return res.status(404).json({

        message: error.message

    });

});



const httpServer = http.createServer(router);

httpServer.listen(view.port, () => console.log(view.portview()));

console.log(IPerson.personDetails());
console.log(newTeacher.teacherDetails());
console.log(newTeacher.personDetails());
console.log(newStudent.studentDetail());
console.log(newAccount.printAccountDetails());
console.log(newBankManager.printAccountDetails());
console.log(newBankManager.printBankView());
