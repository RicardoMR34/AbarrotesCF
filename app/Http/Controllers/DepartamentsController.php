<?php

namespace App\Http\Controllers;
use App\Models\Departament;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class DepartamentsController extends Controller
{
    //Test
    public function index()
    {
        $departaments=Departament::all();
        return $departaments;
    }

    //token creation
    public function create_token(){
        return csrf_token();
    }


    public function create(){

    }

    //creation of departments
    public function store(Request $request){
        $validator= Validator::make($request->all(), [
            'name'=>'required'
        ]);

        if($validator->fails()) {
            return $validator->errors();
        }

        $departament = Departament::create([
            'name' => $request ->name
        ]);
        echo $request->name;
    }

    public function show($id)
    {

    }

    public function edit($id)
    {
    
    }

    //to update records
    public function update(Request $request)
    {
        $departament = Departament::find($request->id);
        $departament -> name = $request ->name;
        return $departament;
    }

    //to delete records
    public function destroy(Request $request)
    {
        $departament = Departament::find($request->id);
        $departament->delete();
        $departament = Departament::all();
        return $departament;
    }

   
}//class
