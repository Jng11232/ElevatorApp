%%  Define our Plant
M1 = 100;
M2 = 150;
m = 220;
K = 30000;
C = 30;
B = 60;

%defines the TF function 
numtf=[C K]; %numerator of TF 
dentf=[(M1*(M2+m)) (M1*(B+C)+(M2+m)*C) (K*(M1+M2+m)+B*C) B*K 0];	%denominator of TF 	
G=tf(numtf,dentf);	%transfer function
           
%Makes the closed loop function
Ts=feedback(G,1) %provide plant as 1st var, feedback as 2nd var


%% gets the graph and information needed
impulse(Ts);
stepinfo(Ts)
%impulse(Ts);

%% RUN SISO TOOL 

sisotool(sys) 

