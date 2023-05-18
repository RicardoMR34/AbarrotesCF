<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\DepartamentsController;
use App\Http\Controllers\BuysDetailsController;
use App\Http\Controllers\SalesDetailsController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('/product',ProductsController::class);

//Test
Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello', function () {
    return 'welcome';
});

//employess
Route::get('/employees_index',  [EmployeesController::class, 'index']);

//Route::post('/employees_store', [EmployeesController::class, 'store']);

Route::post('/employees_destroy', [EmployeesController::class, 'destroy']);

Route::post('/employees_update', [EmployeesController::class, 'updateStatus']);

//Products
Route::get('/save_product' , [ProductsController::class, 'store']);
Route::post('/product_create' , [ProductsController::class, 'store']);
Route::get('/product_index',  [ProductsController::class, 'index']);
Route::post('/product_update', [ProductsController::class, 'update']);
Route::post('/product_find', [ProductsController::class, 'findProduct']);

Route::post('/product_find', [ProductsController::class, 'findProduct']);
Route::post('/product_get', [ProductsController::class, 'getProduct']);
Route::post('/product_updateProduct', [ProductsController::class, 'updateProduct']);

//Departaments
Route::get('/departaments_index',  [DepartamentsController::class, 'index']);

Route::get('/create_token', [DepartamentsController::class, 'create_token']);//TOKEN

Route::post('/departament_store', [DepartamentsController::class, 'store']);

Route::post('/departament_destroy', [DepartamentsController::class, 'destroy']);

Route::post('/departament_update', [DepartamentsController::class, 'update']);


Route::post('/buyDetail_store', [BuysDetailsController::class, 'store']);

Route::post('/saleDetail_store', [SalesDetailsController::class, 'store']);