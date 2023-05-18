<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->integer('control_number')->unique()->nullable();
            $table->string('name',100)->nullable();
            $table->string('last_name',100)->nullable();
            $table->string('password',100)->nullable();
            $table->string('address',100)->nullable();
            $table->string('phone_number',100)->unique()->nullable();
            $table->char('status',1)->nullable(); //active and inactive
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
        Schema::dropIfExists('employees');
    }
}
