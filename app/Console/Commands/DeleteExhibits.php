<?php

namespace App\Console\Commands;

use App\FileExhibit;
use Illuminate\Console\Command;

class DeleteExhibits extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete:exhibits';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete introduced exhibits';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // $fileExhibits = FileExhibit::truncate();

        // $this->info('All introduced exhibits are deleted successfully!');
    }
}
