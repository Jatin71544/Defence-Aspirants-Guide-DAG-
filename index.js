function checkfunction(){
  DATE = document.getElementById("entered_Date").value;
  if(2000-07-02 <DATE< 2005-07-01 ){
    document.getElementById("goresult").innerHTML="Eligible For CDS 1 2023 (IMA, AFA, INA, OTA); Note: attempt limit for candidates holding Commercial Pilot Licence issued by DGCA (India) is +2 years (till 26 years)";
  }
  else{
    document.getElementById("goresult").innerHTML="Not Eligible";
  }
}
