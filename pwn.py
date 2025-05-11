// rotate each string character based on corresponding ascii values from some key
function str_rot_pass($str, $key, $decrypt = false){

    // if key happens to be shorter than the data
    $key_len = strlen($key);

    $result = str_repeat(' ', strlen($str));

    for($i=0; $i<strlen($str); $i++){

        if($decrypt){
            $ascii = ord($str[$i]) - ord($key[$i % $key_len]);
        } else {
            $ascii = ord($str[$i]) + ord($key[$i % $key_len]);
        }

        $result[$i] = chr($ascii);
    }

    return $result;
}