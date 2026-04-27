
SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe"

Browser("Browser").Navigate "https://www.australianunity.com.au/" @@ hightlight id_;_329438_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Australian Unity | Real_2").Page("Private Health Insurance").Link("Get a quote").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Australian Unity | Real_2").Page("Private Health Insurance:").WebList("Scale").Select "Families" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Australian Unity | Real_2").Page("Private Health Insurance:").WebList("State").Select "VIC" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Australian Unity | Real_2").Page("Private Health Insurance:").WebRadioGroup("DependentFirstQuestion").Select "No" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Australian Unity | Real_2").Page("Private Health Insurance:").WebList("HospitalAnswer").Select "High" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Australian Unity | Real_2").Page("Private Health Insurance:").WebList("ExtrasAnswer").Select "Medium" @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Australian Unity | Real_2").Page("Private Health Insurance:").WebRadioGroup("isConsultantRequired").Select "false" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Australian Unity | Real_2").Page("Private Health Insurance:").WebButton("Get a quote").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Australian Unity | Real_2").Page("Recommendation").Image("Logo").Click @@ script infofile_;_ZIP::ssf22.xml_;_


SystemUtil.CloseProcessByName "chrome.exe"

' comment
