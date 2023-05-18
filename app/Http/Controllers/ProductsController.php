<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\Employee;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
  //Read
  public function index (Request $request){
    return $products=Product::all();
  }

  //Create
  public function create(){}

  public function store(Request $request){
    $validator = Validator::make($request->all(), [
      'control_number'=> 'required|max:250',
      'name'=> 'required|max:250',
      'price'=> 'required',
      'stock'=> 'required',
      'photo',
      'provider_Id'=> 'required',
      'departament_Id'=>'required'
    ]);

    if($validator->fails()){
        return $validator->errors();
    }
    //create a product
    $product = Product::create([
      'control_number'=>$request->control_number,
      'name'=> $request->name,
      'price'=> $request->price,
      'stock'=> $request->stock,
      'photo'=> $request->photo,
      'provider_Id'=> $request->provider_Id,
      'departament_Id'=> $request->departament_Id  ]);
  }

  //Update
  public function update(Request $request){
    $product = Product::where('control_number',$request->control_number)->first();
    $product -> control_number = $request -> control_number;
    $product -> name = $request -> name;
    $product -> price = $request-> price;
    $product -> stock = $request-> stock;
    $product -> photo = $request -> photo;
    $product -> provider_Id = $request -> provider_Id;
    $product -> departament_Id = $request-> departament_Id;
    $product -> save();
    return $product;
  } 

  //update name, photo, price
  public function updateProduct(Request $request){
    $product=Product::where('control_number',$request->control_number)->first();
    $product -> name = $request ->name;
    $product -> photo = $request ->photo;
    $product -> price = $request ->price;
    $product -> save();
    return $product;
  }

  public function findProduct(Request $request){
    $product = Product::where('control_number',$request->control_number)->first();
    return $product;
  }    
}//class
