<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'address', 'phone_number'
    ];

    public function buy(){
        return $this->hasMany(Buy::class);
    }

    public function product(){
        return $this->hasMany(Product::class);
    }
}
