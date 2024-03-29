---
nextnote: 
author: Eva
authorlink: https://github.com/deskclam
---
In this chapter will be discussed the problem of scaling in MOS technology, from the constant field scaling and the rules behind it, the short channel effects and all the considerations about it.

## Constant field scaling

One of the main issues with reducing the dimensions of a MOSFET is the high electric fields, like in the channel of $10 nm$, with a even with a $V_{DS}$ of 1V leads to a $10^{8} \frac{V}{m}$  field.
To avoid this issue, the safe way to scale the device is the Dennard scaling, maintaining the electric field constant: by scaling all the device dimensions and all the voltages by the same scaling factor $k>1$.

$$
\begin{align}
t_{ox}\to \frac{t_{ox}}{k} && L\to \frac{L}{k} && W\to \frac{W}{k} && x_{j}\to \frac{x_{j}}{k} && V_{DD}\to \frac{V_{DD}}{k}
\end{align}
$$

Where $t_{ox}$ is the thickness of the oxide, $L$ is the length of the gate, $W$ is the width of the MOS, $x_{j}$ is the depth of the source and drain wells and $V_{DD}$ is the voltage applied (this is valid for all voltages applied to the "scaled" MOS)

Not only the geometrical and electrical parameters must be scaled, to maintain the electric field unchanged (in the depletion region), but also the doping concentration must change, and we need to increase it by the same factor $k$.
This is because the solution of Poisson's equation must maintain the same solution:


$$
\begin{align}
\frac{\partial{\mathcal{E}_{x}}}{\partial{x}} +\frac{\partial{\mathcal{E}_{y}}}{\partial{y}}= -\frac{qN_{A}}{\epsilon_{S}} && \to &&\frac{\partial{\mathcal{E}_{x}}}{\partial{x}/k} +\frac{\partial{\mathcal{E}_{y}}}{\partial{y}/k}= -\frac{q(kN_{A})}{\epsilon_{S}}
\end{align}
$$

One of the main problems while scaling devices is the dissipated power, in order to keep constant the dissipated power per unit area, scaling the device by $k$, means that the area is scaled by $k^{2}$ and so the dissipated power must scale of the same factor of the area, but in the process there are some issues.

## The OFF current
#todo add link
The current of a MOS transistor (recalling the expression found in chapter 03) is:


$$
I_{d}=\beta_{n}(m-1)V_{T}^2\exp\left[ \frac{V_{GS}-V_{th}}{mV_T} \right]
$$
that when $V_{GS}=0$ 


$$
I_{OFF}=\beta_{n}(m-1)V_{T}^2\exp\left[ \frac{-V_{th}}{mV_T} \right]
$$
So the OFF current increases exponentially while decreasing the threshold voltage
The parameter $\beta_{n}$ decreases linearly ($\beta_{n}=C_{ox}\mu_{n,eff}\frac{W}{L}$) with $k$ so it cannot compensate the increase of the OFF current. 
In order to restore an acceptable OFF current, a short device should have a higher slope so lower $S=\left( \frac{ \partial \log I_{D} }{ \partial V_{GS} } \right)^{-1}$, but capacitances scale by the same factor, and so $m$ is constant therefore $S$ is constant.
The dissipated power/chip with $V_{GS}=0$ should not exceed 1W and considering a circuit with $10^{10}$ devices at a voltage of 1V, so the OFF current should be $I_{OFF}<0.1\text{nA/device}$.
It is also required ahigh ON/OFF ratio, a common criteria is that the current at threshold ($V_{GS}=V_{th}$) should be at least 100 times the current OFF, that can be obtained choosing a proper $\beta_{n}$.

Considering $m=1.5$ a safe choice for the minimum of the voltage threshold 

$$
V_{th}> 0.4V
$$

## The ON current

The speed of integrated circuit increases with higher current ($V_{GS}=V_{DD}$)

$$
I_{ON}=\frac{\beta_{n}}{2m}(V_{DD}-V_{th})^{2}
$$
and a common criteria to ensure a good  ON current is to take:


$$
V_{th}\leq \frac{V_{DD}}{4}
$$
and the threshold voltage is a trade-off between high power dissipation and speed.

## Short Channel Effects (SCE)

SCEs are experimental phenomena observed decreasing $L$ only. Even though $V_{th}$ is independent from $L$ but the most important effect is the lowering of $V_{th}$ with decreasing $L$, called $V_{th}$ roll-off. This effect is enhanced as $V_{DS}$ grows.

The explanation can be traced back to the electric field distribution, which becomes fully 2-dimensional, so the GCA is no longer verified.

Looking at the equipotential lines when $V_{GS}$ is slightly below threshold and $V_{DS}$ is high:

- In a long device the equipotential lines are horizontal under the gate, apart from the corner regions close to the source and drain pn junctions and are close to the gate ($\mathcal{E}_{x}$ is really high) and close to the Si surface
- In a short device the equipotential lines are not horizontal ($\mathcal{E}_{y}\neq 0$ under the channel) and less close to the gate, $\mathcal{E}_{x}$ is lower and spread away from the Si surface.

In the image below we can see that below threshold ($V_{GS}<V_{th}$) the surface potential in the short channel is higher, and the energy barrier is lower with respect to the "long" channel case.

If a voltage is applied between source and drain ($V_{DS}$>0) the voltage on the drain increases and in a short channel MOS the surface voltage increases, and the energy barrier decreases even more. This effect is called *Drain Induced Barrier Lowering* (DIBL)

Taking into account all the listed phenomena:
In order to minimize the Short Channel Effects is known that the condition is $x_{d0}+3t_{ox}\leq \frac{L}{2}$
To minimize $S$: 

$$
\begin{align}
\frac{C_{d}}{C_{ox}}< \frac{1}{2} && \implies && \frac{3t_{ox}}{x_{d}}< \frac{1}{2}
\end{align}
$$
To avoid breakdown in the oxide the field must be less than $\mathcal{E}_{ox,max}$

$$
t_{ox}\geq t_{ox,min}
$$
And finally to avoid OFF power dissipation (considering also the speed of the device) 

$$
0.4V\leq V_{th}\leq \frac{V_{DD}}{4}
$$
with all these constraints it is impossible to design a device, the device structure must change.


