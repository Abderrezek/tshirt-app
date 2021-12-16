<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClotheImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clothe_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('clothe_id')
                ->constrained('clothes')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->string('image');
            $table->string('image_blur')->nullable();
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
        Schema::dropIfExists('clothe_images');
    }
}
