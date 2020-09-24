<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFileExhibitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('file_exhibits', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('file_id');
            $table->string('exhibit_number');
            $table->bigInteger('private_folder_id');
            $table->bigInteger('copied_file_id');
            $table->bigInteger('shared_folder_id');
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
        Schema::dropIfExists('file_exhibits');
    }
}
