<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buy extends Model
{
    use HasFactory;

    protected $fillable = [
        'buy_date', 'total', 'employee_Id'
    ];

    public function employee(){
        return $this->belongsTo(Employee::class);
    }

    public function provider(){
        return $this->belongsTo(Provider::class);
    }

    public function buyDetail(){
        return $this->hasMany(BuyDetail::class);
    }





}
