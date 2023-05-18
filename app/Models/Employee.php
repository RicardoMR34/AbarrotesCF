<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'control_number', 'name', 'last_name', 'password', 'address', 'phone_number', 'status'
    ];

    public function sale(){
        return $this->hasMany(Sale::class);
    }

    public function buy(){
        return $this->hasMany(Buy::class);
    }
}
