<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'control_number', 'name', 'price', 'stock', 'photo', 'provider_Id', 'departament_Id'
    ];

    public function provider(){
        return $this->belongsTo(Provider::class);
    }

    public function departament(){
        return $this->belongsTo(Departament::class);
    }

    public function saleDetail(){
        return $this->hasMany(SaleDetail::class);
    }

    public function buyDetail(){
        return $this->hasMany(BuyDetail::class);
    }
}
