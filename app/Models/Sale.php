<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $fillable = [
        'sale_date', 'total', 'employee_Id'
    ];

    public function saleDetail(){
        return $this->hasMany(SaleDetail::class);
    }

    public function employee(){
        return $this->belongsTo(Employee::class);
    }

}
