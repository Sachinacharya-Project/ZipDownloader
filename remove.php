<?php
if(isset($_POST['filesname'])){
    $file = $_POST['filesname'];
    if(unlink($file)){
        echo "Success";
    }else{
        echo "failed";
    }
}

?>