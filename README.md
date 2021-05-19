# Zip Downloader
__________________________________________________________________________________
## Descriptions
**ZipArchive:** It is a Simple PHP_OBJECT that allows users to download or unzip multiple files from or to the Server with the help of Php Zip Extension.
Here, in this project, we can select and download multiple images in single zip file.
## Installation
(Only for Localhost)
1. Download php_zip.dll file which is included in Repo/Extension
2. Edit php.ini file
   /xampp installation folder/php/php.ini
3. Add This line of code
   extension=zip
4. Copy and paste php_zip.dll file in the ext folder with in php folder from above link
Restart the Xampp Server
(Note: Do make backup of php.ini file before any modifications)
## Explanation
````php
$zip = new ZipArchive; // Intializing ZipArchive Object
if($zip->open("zipfilename.zip", ZipArchive::CREATE)){ // Creating new zip file
    $zip->addFile("File Name"); // Adding file
    $zip->close(); // Once done closing object
}
````