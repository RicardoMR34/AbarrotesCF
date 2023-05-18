<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('control_number')->unique()->nullable();
            $table->string('name', 100)->nullable();
            $table->integer('price')->nullable();
            $table->integer('stock')->nullable();
            $table->text('photo',2000);
            $table->foreignId('provider_Id')->references('id')->on('providers')->nullable();
            $table->foreignId('departament_Id')->references('id')->on('departaments')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
