<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBuysDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buys_details', function (Blueprint $table) {
            $table->id();
            $table->integer('unit_price')->nullable();
            $table->integer('quantity')->nullable();
            $table->foreignId('buy_Id')->references('id')->on('buys')->nullable();
            $table->foreignId('product_Id')->references('id')->on('products')->nullable();
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
        Schema::dropIfExists('buys_details');
    }
}
