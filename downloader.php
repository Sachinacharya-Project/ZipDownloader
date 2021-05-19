<?php
    if(isset($_POST['files'])){
        $files = $_POST['files'];
        $zip = new ZipArchive;
        $zipfilename = time().".zip";
        if($zip->open($zipfilename, ZipArchive::CREATE)){
            foreach($files as $file){
                $zip->addFile($file);
            }
            $zip->close();
            echo $zipfilename;
        }
    }
?>