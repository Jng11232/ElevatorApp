%%  Define our Plant
M1 = 100;
M2 = 150;
m = 220;
K = 30000;
C = 30;
B = 60;


Ps=tf(C*s+K,(s*(M1*(M2+m)*(s^3) + ((M1*(B+C)+(M2+m)*C)*(s^2)) + (K* (M1 + M2 + m) + B*C) * s + B*K)))
           
Ts=feedback(Ps,1) %provide plant as 1st var, feedback as 2nd var

P = (C*s+K) / (s*(M1*(M2+m)*s^3 + ((M1*(B+C)+(M2+m)*C)*s^2) + (K* (M1 + M2 + m) + B*C) * s + B*K))
sys = tf(P)

%% RUN SISO TOOL 

sisotool(sys) 

