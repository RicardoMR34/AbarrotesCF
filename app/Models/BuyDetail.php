<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuyDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'unit_price', 'quantity', 'buy_Id','product_Id'
    ];

    public function buy(){
        return $this->belongsTo(Buy::class);
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
