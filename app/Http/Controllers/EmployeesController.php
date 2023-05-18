<?php

namespace App\Http\Controllers;
use App\Models\Employee;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    //Read
    public function index (Request $request){
        return  $employee=Employee::all();
    }

    //Create
    public function create(){}

    //Store Employee
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'control_number' => 'required|max:250',
            'name' => 'required|max:250',
            'last_name' => 'required',
            'password' => 'required',
            'address'=>'required',
            'phone_number' => 'required',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }
        //create an employee
        $employee = Employee::create([
            'control_number' => $request->control_number,
            'name' => $request->name,
            'last_name' => $request->last_name,
            'password' => $request->password,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'status' => $request->status
        ]);
    }

    //Update Employee
    public function updateStatus(Request $request){
        $employee=Employee::where('control_number',$request->control_number)->first();
        $employee -> status = $request -> status;
        $employee -> save();
        return $employee;
    }

    //Delete Employee
    public function destroy(Request $request){
        $employee = Employee::find($request->id);
        $employee->delete();
        $employee = Employee::all();
        return $employee;
    }
}//class employees key

