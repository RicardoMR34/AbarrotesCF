<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\DepartamentsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



//Products
Route::post('/save_product' , [ProductsController::class, 'store']);
Route::get('/product_index',  [ProductsController::class, 'index']);
Route::post('/product_update', [ProductsController::class, 'update']);
Route::post('/product_find', [ProductsController::class, 'findProduct']);

Route::post('/product_find', [ProductsController::class, 'findProduct']);
Route::post('/product_get', [ProductsController::class, 'getProduct']);
Route::post('/product_updateProduct', [ProductsController::class, 'updateProduct']);

//Employees
Route::post('/employees_store', [EmployeesController::class, 'store']);
Route::post('/employees_update', [EmployeesController::class, 'updateStatus']);
Route::get('/employees_index',  [EmployeesController::class, 'index']);

//Departaments
Route::get('/departaments_index',  [DepartamentsController::class, 'index']);