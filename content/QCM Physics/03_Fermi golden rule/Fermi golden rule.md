---
nextnote: "[[Heterostructures]]"
author: Giacomo, BabelDev0
Acknowledgements: Marco Parentin
authorlink: https://github.com/gamberoillecito,https://github.com/BabelDev0
---
## Overview of the contents

Before proceeding to the main topic we should understand why it is useful and why we study it.

To study how the system evolves in this setting, we need to know the **Transition Probabilities** (probability of transitioning from one state to another) and the **Transition rate** (transition probability per unit of time) between two state $\ket{\Psi_{i}}$ and $\ket{\Psi_{f}}$ under the effect of a weak time-dependent perturbation.

### Perturbation theory

The main idea behind perturbation theory is to start with a known or easily solvable system (the unperturbed system) and then introduce a small modification or perturbation that alters the behaviour of the system. By treating the perturbation as a small deviation from the known system, physicists can develop an iterative series solution where each successive term provides a more accurate approximation of the real solution.

### First order perturbation 

In first-order perturbation, the perturbation is assumed to be small enough that the modifications induced to the system can be linearly approximated, introducing a major simplification of the calculations. The first-order perturbation equation can be used only to approximate **weak physical disturbances**, such as a potential energy produced by an external field. We will use it exploring the interaction of an incoming electron with a dipole.

### Results

We'll observe that after the perturbation, the chances of the system reaching the final state are higher when the perturbation's frequency matches that of the system. In that case we say that the perturbation is in resonance with the system and this indicates that the perturbing energy can be absorbed or emitted by the system, facilitating transitions between these states.

___

## DOS 

The [[Models#Density of states (DOS)|Density of states (DOS)]] can be written in another equivalent form  ^c9919a

$$
D(E) = \sum_{n} \delta(E - E_{n})
$$

which, differently from the one seen [[Models#^3829fb|previously]] is not normalized to volume. To check that the two definition are equivalent, let's calculate the number of state $N(E)$

$$
\begin{align}
&N(E) = V \int_{E_{1}}^{E_{2}} D(E) \, dE && \tag{1}
\\
&N(E) = \int_{E_{1}}^{E_{2}} \sum_{n} \delta(E - E_{n}) \, dE && \tag{2}
\end{align}
$$

both actions involve counting the number of energy states within the range of $E_1$ to $E_2$, and the outcomes are identical except for a normalization factor.

## Perturbation theory

Starting form a periodic unperturbed system described by the Hamiltonian $\hat{H}_{0} = \hat{H}_{0}(\bar{r})$ the Schrödinger equation is 

$$
\hat{H}_{0} \Phi_{i} (\bar{r}, t) = E_{i} \Phi_{i} (\bar{r}, t)
$$

Supposing that the Hamiltonian is time independent we can write the solution as
$$
\Phi_{i}(\bar{r}, t) = \phi_{i}(\bar{r}) e^{ -i( E_{i}/\hbar) t } \qquad \text{(stationary state)}
$$

When a perturbation $\hat{V}(t)$ perturbs the system, the Hamiltonian changes in

$$
\hat{H} = \hat{H}_{0} + \hat{V}(t) \quad t>0
$$

We want to find the evolution in time $\Psi (\bar{r}, t)$ of the perturbed system: 

$$
\hat{H} \Psi(\bar{r}, t) = i \hbar \frac{ \partial \Psi(\bar{r}, t) }{ \partial t } \quad \text{(time dependant S.E.)}
$$

we know that $\Phi_{i}(\bar{r}, t)$ forms a complete basis for the **unperturbed** system so the general solution $\Psi(\bar{r},t)$ can be generally expressed as a linear combination:

$$
\Psi(\bar{r}, t) = \sum_{j} {\color{red}  c_{j}(t)}  \Phi_{j} (\bar{r}, t)
$$

where the coefficient $c_{j}(t)$ are the terms responsible for the time dependance of the general solution. 

### Observation

The perturbation makes the system evolve from an initial state $\ket{\Psi_{i}}$ to a final state $\ket{\Psi_{f}}$. Since each $|c_j|^{2}$ represents the probability of finding the particle in the state $j$, after the transition (at the end of the evolution) all the coefficients will be 0 except for $c_{f}$.

![[perturbation_transition.svg|450]]

So now our goals is to calculate the coefficients $c_{j}(t)$ and rewrite the Schrödinger equation as follows, using the Hamiltonian $\hat{H}$:

$$ 
\underbrace{ [\hat{H_{0}} + \hat{V}(t)] }_{ \hat{H} } \sum_{j} { c_{j}(t)}  \Phi_{j} (\bar{r}, t) = i \hbar \frac{ \partial }{ \partial t } \sum_{j} { c_{j}(t)}  \Phi_{j} (\bar{r}, t)
$$

> [!warning] Many steps are not reported in the following.

after some steps we get:

$$
\frac{ \partial c_{f}(t) }{ \partial t } = \frac{1}{i \hbar} \sum_{j} c_{j}(t) \cdot V_{fj}(t) \cdot e^{ i (E_f - E_{j}) t /\hbar } \tag{3}
$$
Where

$$
V_{fj}(t) = \braket{ \phi_{f}(\bar{r}) | \hat{V}(t) | \phi_{j}(\bar{r}) } 
$$

$V_{fj}​(t)$ represents the matrix element representation of the perturbation between states $f$ and $j$ in the $\{\phi_{j}\}$ basis (solutions of the unperturbed system). The elements of the matrix can be calculated since both the perturbation $\hat{V}(t)$ and $\phi$ are known.

### First order perturbation theory

To solve equation $(3)$ we need to make some assumptions: we suppose that the perturbation is so small that the system hasn't evolved too much. So for $t=0$ we have $c_{i}(t = 0) = 1$ and $c_{j}(t = 0) = 0 \quad \forall j \neq i$ . 

Indeed the **FIRST ORDER APPROXIMATION** consist in the assumption that:

$$
\begin{align}
&c_{i}(t \simeq 0) = 1 && \text{(} i = \text{initial)} \\
&c_{j}(t \simeq 0) = 0 && j \neq i
\end{align}
$$

With this approximation we can rewrite $(3)$ as 

$$
\displaylines{
\frac{ \partial c_{f}(t) }{ \partial t } = \frac{1}{i \hbar} 1 \cdot V_{fi}(t) e^{ i(\overbrace{ E_{f} - E_{i}}^{ E_{fi} }) t /\hbar } \\
\Downarrow\\
c_{f}(t) = \frac{1}{i\hbar} \int_{0}^{t} V_{fi} (t') e^{ i E_{fi} ~ t /\hbar }\, dt'
}
$$

The **transition probability**  (the probability of finding the system in a given (final) state $f$) is:

$$
P_{f}(t) = |c_{f}(t)|^{2} = \frac{1}{\hbar^{2}} \cdot \left|\int_{0}^{t} V_{fi}(t') e^{ i E_{fi} t' /\hbar } \, dt' \right|^{2} 
$$

The **transition rate** (how fast an electron evolves from the initial state to the final state) can be calculated as:

$$
W_{fi} = \frac{ \partial P_{f} }{ \partial t } 
$$

This means that if $P_{f}$ is close to $1$ the perturbation had a strong effect on the system, so it is likely that the final state of the system after the evolution is $\ket{\Psi_f}$.

## Dipole in an electric field

If we imagine the perturbation generated by an incoming photon the electric field can be expressed as:

$$
\mathcal{E}_{ph}(t) = \bar{\mathcal{E}_{0}} \cdot [ e^{i(\bar{k}⋅\bar{r}−ωt)}+e^{-i(\bar{k}⋅\bar{r}−ωt)}]
$$ 
Where:

- $\mathcal{E}_{0}$ is a complex vector representing the amplitude and phase of the electric field.
- $e^{i(\bar{k}⋅\bar{r}−ωt)}$ and $e^{-i(\bar{k}⋅\bar{r}−ωt)}$ are the terms representing the spatial and temporal variations of the electric field due to the photon's propagation.

We take a dipole as a system. A dipole consists of two charges of opposite polarity separated by a distance $d$. When a photon (an electromagnetic wave) interacts with a dipole, the varying electric field of the photon exerts forces on these charges producing a perturbation.

The perturbation potential can be express as 
$$
\begin{align} \\
&\Delta E(t)= -\bar{p} \cdot \bar{\mathcal{E}}_{ph}(t)
\\ \\
&\bar{p} = Q \cdot  \bar{r}  
\end{align}
$$
where :

- $\bar{p}$ is the electric dipole moment.
- $Q$ is the value of the charges

In this case our perturbation is $\hat{V}(t)=\Delta E(t)= -\bar{p} \cdot \bar{\mathcal{E}}_{ph}(t)$
Now, starting from the perturbation, we will derive $V_{fi}$, the transition probability $P_f$ and the transition rate $W_{fi}$.

We can write $c_{f}​(t)$ for the transition from $\ket{\Psi_{i}}$ to $\ket{\Psi_{f}}$ as : 

$$
\displaylines{
c_{f}(t) = \frac{1}{i\hbar} \int_{0}^{t} V_{fi} (t') e^{ i E_{fi} ~ t /\hbar }\, dt' \\
\Downarrow\\
c_{f}(t) = \frac{1}{i\hbar} \int_{0}^{t} {\color{red} \braket{ \phi_{f}(\bar{r}) | -e \cdot \bar{r} \cdot \bar{\mathcal{E}_{0}} \cdot [ e^{i(\bar{k}⋅\bar{r}−ωt)}+e^{-i(\bar{k}⋅\bar{r}−ωt)}] | \phi_{j}(\bar{r})}} e^{ i E_{fi} ~ t /\hbar }\, dt'
}
$$ 
>[!warning] Many steps are not reported in the following.

$$
\begin{align}
\left| c_{f}(t) \right| ^{2} &= \frac{t^{2}}{\hbar^{2}} |M_{fi}|^{2} sinc^{2}\left[ (E_{fi} - \hbar \omega) \frac{t}{2\hbar} \right] +  \\
&+ \frac{t^{2}}{\hbar^{2}} |M_{if}|^{2} sinc^{2}\left[ (E_{fi} + \hbar \omega) \frac{t}{2\hbar} \right] + \\
&+ \cancelto{\simeq 0}{ \frac{2t^{2}}{\hbar^{2}} \cos\left( \frac{\omega t}{\hbar} \right) sinc\left[ (E_{fi} - \hbar\omega) \frac{t}{2\hbar} \right] \cdot sinc\left[ (E_{fi} + \hbar\omega) \frac{t}{2\hbar} \right] \cdot M_{fi} \cdot M_{if}^{*} }
\end{align}
$$

where:
- $M_{fi}$ is $\braket{ \phi_{f}(\bar{r}) | -e \cdot \bar{r} \cdot \bar{\mathcal{E}_{0}} \cdot  e^{i\bar{k}⋅\bar{r}} | \phi_{i}(\bar{r})}$ 
- $M_{{\color{red} if}}$ is $\braket{ \phi_{{\color{red} i}}(\bar{r}) | -e \cdot \bar{r} \cdot \bar{\mathcal{E}_{0}} \cdot  e^{i\bar{k}⋅\bar{r}} | \phi_{{\color{red} f}}(\bar{r})}$ 
  
<iframe src="https://www.desmos.com/calculator/es2d8sr5iz?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

By plotting the first term we can see that it has a spike where $\hbar\omega = E_{fi}$ (remember that $E_{fi} = E_{f} - E_{i}$) obviously where the $sinc$ function makes zero. This means that the perturbation needs to have the "right" frequency ($\omega = \frac{E_{if}}{\hbar}$) to influence the system in a meaningful way. We can also see that for short times the influence of the perturbation is smaller compared to longer times due to the factor $t^2$.

Plotting the second term alone shows similar result but when $\hbar\omega = -E_{fi}$.
The first case corresponds to the **absorption** of a photon (the system increases its energy), the second one, on the other hand, to the **stimulated emission** of a photon. 

>[!warning] Note that in the second case the first photon is not absorbed and only creates the perturbation, which generates the emission of a second photon

![[emission_absorbtion_perturbation.svg]]

In the **stimulated emission** scenario, the second photon (in blue) is the emitted one, we exploit this effect in lasers.

For $t \rightarrow \infty$ the function $\left| c_{f}(t) \right| ^{2}$ becomes so narrow that it can be approximated by $\delta(E_{if}\pm\hbar\omega)$

We can now calculate the $P_f$, just focusing only on the first term :

$$
|c_{f}(t)|^{2} = \frac{t^{2}}{\hbar^{2}} |M_{fi}|^{2} sinc^{2}\left[ (E_{fi} - \hbar \omega) \frac{t}{2\hbar} \right]
$$

#todo improve

![[FGR_1C.png]]
![[FGR_2C.png]]

By calculating the transition rate we get the **Fermi golden rule**: 

$$
\begin{align}
&W_{fi} = \frac{2\pi}{\hbar} |M_{fi}|^{2} \delta(E_{f} - E_{i} {\color{red} -}  \hbar \omega) \qquad \text{(first term)} \\
&W_{if} = \frac{2\pi}{\hbar} |M_{fi}|^{2} \delta(E_{f} - E_{i} {\color{red} +}  \hbar \omega) \qquad \text{(second term)}
\end{align}
$$

## In Solid

In complex systems like in solid we will have multiple initial $\{E_i\}$ and final $\{E_f\}$ states that satisfy the equality $\Delta E = \hbar \omega$ and the transition will occur for each of these states.

![[absorbtion_in_solid.svg|300]]

So the formula needs to take in account the sum over all the states:

$$ 
\displaylines{
W_{fi} = \frac{2\pi}{\hbar} \sum_{if}|M_{fi}|^{2} \delta(E_{f} - E_{i} {\color{red} -}  \hbar \omega)
\\
\Downarrow \\
W_{fi} = \frac{2\pi}{\hbar} |M_{fi}|^{2}\sum_{if} \delta(E_{f} - E_{i} {\color{red} -}  \hbar \omega)
\\
\Downarrow \\
W_{fi} = \frac{2\pi}{\hbar} |M_{fi}|^{2} D(\hbar \omega) \quad \text{Fermi golden rule}
}
$$

in the first step we extracted $|M_{fi}|^{2}$ from the sum because it is non dependent from the initial and final states. Instead in the second step we replaced the sum with the definition of the [[#^c9919a|Density of states (DOS)]].

## Semiconductor

#todo improve drawing 

![[electron in crystal temp.png|300]]

$$M_{fi} = \braket{ \phi_{f} | e \bar{r} \bar{\varepsilon}_0  e^{ \pm i \bar{k} \bar{r} }|\phi_{i}}$$

Since $\phi_{i}, \phi_{f}$ are typically **Bloch states** due to the fact that we are inside a crystal structure, we can write them as:

$$
\begin{align}
&\phi_{i}(\bar{r}) = \frac{1}{\sqrt{ V }} e^{ i \bar{k}_{i} \bar{r} } \cdot u_{k_{i}}(\bar{r}) \\
& \phi_{f}(\bar{r}) = \frac{1}{\sqrt{ V }} e^{  i \bar{k}_{f} \bar{r} } \cdot u_{k_{f}}(\bar{r})
\end{align} 
$$

and we can rewrite $M_{fi}$ as:

$$M_{fi} = \frac{e}{V}\int u^{*}_{k_{f}}(\bar{r}) \ u_{k_{i}}(\bar{r})\  \bar{r}\  \bar{\varepsilon}_0 \ e^{(\bar{k}_{f}-\bar{k}_{i} \pm \bar{k})\ \bar{r}} d\bar{r}$$

When a photon is absorbed or emitted by a material, it can cause an electron to transition from one state to another. 

There are two key constraints governing this transition:

- **Energy conservation**: The energy difference between the initial and final states $\Delta𝐸 = E_{f} - E_{i}$ is related to the photon's energy $\Delta E = \hbar\omega$
- **Momentum conservation**: The change in the wavevector $k=k_{f}-k_{i}$ caused by the transition is equal to the absorbed photon's wavevector

$$
\hbar k_{f}-\hbar k_{i}=\pm\hbar k
$$

- the change in momentum resulting from photon-induced transitions is negligible $k \approx 0 \Longrightarrow k_{f}=k_{i}$

So we have that:

$$
\displaylines{
M_{fi} = \frac{e}{V}\int u^{*}_{k_{f}}(\bar{r}) \ u_{k_{i}}(\bar{r})\  \bar{r}\  \bar{\varepsilon}_0 \ \cancelto{1}{e^{(\bar{k}_{f}-\bar{k}_{i} \pm \bar{k})\ \bar{r}} d\bar{r}
}
\\
\Downarrow
\\
M_{fi} = \frac{e}{V}\int u^{*}_{k_{f}}(\bar{r}) \ u_{k_{i}}(\bar{r})\  \bar{r}\  \bar{\varepsilon}_0}
$$ 
Simplifying the electric field $\varepsilon \rightarrow (\varepsilon_{x},0,0)$ we get:

$$
\displaylines{
M_{fi} = \frac{e \ \varepsilon_{x}}{V}\int u^{*}_{k_{f}}(\bar{r}) \ u_{k_{i}}(\bar{r})\  x}\ d\bar{r}
$$

Since the volume of the crystal is equal to the volume of the primitive cell multiply by the number of these we can write:


$$
\displaylines{
M_{fi} = \frac{e \ \varepsilon_{x}}{V} N \int_{\text{primitive cell}} u^{*}_{k_{f}}(\bar{r}) \ u_{k_{i}}(\bar{r})\  x}\ d\bar{r}
$$

We have that $M_{fi}$ depends by $u^{*}_{k_{f}}(\bar{r})$ and $u_{k_{i}}(\bar{r})$ so it may happened that for some value of $\bar{r}$ we get $M_{fi} = 0$ this case are called **selection rules** because in this case the transition between states is forbidden. 



