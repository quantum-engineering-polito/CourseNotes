---
nextnote: "[[nN heterostructure]]"
---
## Overview of the contents
Before proceeding to explain the topic a brief introduction on why it is useful and why we study it.

We want to know the **Transition Probabilities** and the **Transition rate** between two state $\ket{\Psi_{i}}$ and $\ket{\Psi_{f}}$ under the effect of a weak time-dependent perturbation, to study how the system evolve in this setting.
### Perturbation theory
The main idea behind perturbation theory is to start with a known or easily solvable system (the unperturbed system) and then introduce a small modification or perturbation that alters the behaviour of the system. By treating the perturbation as a small deviation from the known system, physicists can develop an iterative series solution where each successive term provides a more accurate approximation of the true solution.
### First order perturbation 
In first-order perturbation, the perturbation is assumed to be small enough that the modifications it induces to the system can be linearly approximated, introducing a major simplification of the calculations. The first-order perturbation equation can be use only to approximate weak physical disturbance, such as a potential energy produced by an external field. We will use it exploring the interaction of an incoming electron with a dipole.
### Results
We'll observe that after the perturbation, the chances of the system reaching the final state are higher when the perturbation's frequency matches that of the system. In that case we say that the perturbation is in resonance with the system and it indicates that the perturbing energy can be absorbed or emitted by the system, facilitating transitions between these states.
### Fermi golden rule
Fermi's golden rule describes a system that begins in an eigenstate 
$\ket{\Psi_{i}}$ of an unperturbed System $\hat{H_0}$ and considers the effect of a perturbation applied to the system. The perturbation can be time-independent or not in both cases, the **Transition rate** (transition probability per unit of time) from the initial state to the final is essentially constant.
___
## DOS
The [[Models#Density of states (DOS)|Density of states (DOS)]] can be written in another equivalent form 

$$
D(E) = \sum_{n} \delta(E - E_{n})
$$

which, differently from the one seen previously
$$ D(E) = \frac{1}{V} \frac{dN(E)}{dE} $$ 
is not normalized to volume. Integrating both over an energy interval we can obtain the total number of state $N(E)$

$$
\begin{align}
&N(E) = V \int_{E_{1}}^{E_{2}} D(E) \, dE && \tag{1}
\\
&N(E) = \int_{E_{1}}^{E_{2}} \sum_{n} \delta(E - E_{n}) \, dE && \tag{2}
\end{align}
$$

## Perturbation theory

$$
\hat{H}_{0} \Phi_{i} (\bar{r}, t) = E_{i} \Phi_{i} (\bar{r}, t)
$$

Suppose that the Hamiltonian is time independent we can write 

$$
\Phi_{i}(\bar{r}, t) = \phi_{i}(\bar{r}) e^{ -i( E_{i}/\hbar) t } \quad \text{(stationary state)}
$$

When an perturbation $\hat{V}(t)$ perturbed the system the Hamiltonian changes in
$$
\hat{H} = \hat{H}_{0} + \hat{V}(t)
$$

We have to find $\Psi (\bar{r}, t)$ that describes the system after the perturbation : 

$$
\hat{H} \Psi(\bar{r}, t) = i \hbar \frac{ \partial \Psi(\bar{r}, t) }{ \partial t } \quad \text{(time dependant S.E.)}
$$

$\Psi(\bar{r},t)$ can be generally express as a linear combination 

$$
\Psi(\bar{r}, t) = \sum_{j} {\color{red}  c_{j}(t)}  \Phi_{j} (\bar{r}, t)
$$

where the coefficient $c_{j}$ are the terms responsible for the time dependance of the wave function. 
![[perturbation_transition.svg|center|450]]
Each $c_j$ has a physical meaning; its modulus square is the probability of finding the particle in its associated state. So After the transition, at the end of the evolution, all the coefficients will be 0 except for $c_{f}$

Rewriting the Schrödinger equation with the linear combination and the new Hamiltonian we get:

$$ 
[\hat{H_{0}} + \hat{V}(t)] \sum_{j} { c_{j}(t)}  \Phi_{j} (\bar{r}, t) = i \hbar \frac{ \partial }{ \partial t } \sum_{j} { c_{j}(t)}  \Phi_{j} (\bar{r}, t)
$$
> [!warning] Many steps are not reported in the following.

after some step we get:

$$
\frac{ \partial c_{f}(t) }{ \partial t } = \frac{1}{i \hbar} \sum_{j} c_{j}(t) \cdot V_{fj}(t) ~ e^{ i (E_f - E_{j}) t /\hbar } \tag{3}
$$
Where
$$
V_{fj}(t) = \braket{ \phi_{f}(\bar{r}) | \hat{V}(t) | \phi_{j}(\bar{r}) } 
$$
$V_{fj}​(t)$ represents the time-dependent matrix element of the potential energy operator between states $f$ and $j$. Essentially quantifies how the potential energy affects the transition between states $f$ and $j$ at a particular time $t$. The elements can be calculated since both the perturbation $\hat{V}(t)$ and $\phi$ are known.

To solve the equation above we need a set of mathematical approximation schemes called **perturbation theory**

### First order perturbation theory
To solve equation $(3)$ we need to make some assumptions: we suppose that the perturbation is so small and applied for such a short time that the system hasn't evolved too much. This allows to approximate all $c_{j} = 0$ except for the first one: 

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

The probability of finding the system in a given (final) state is:

$$
P_{f}(t) = |c_{f}(t)|^{2} = \frac{1}{\hbar^{2}} \cdot \left|\int_{0}^{t} V_{fi}(t') e^{ i E_{fi} t' /\hbar } \, dx \right|^{2} 
$$
While the **transition rate** is:

$$
W_{fi} = \frac{ \partial P_{f} }{ \partial t } 
$$

This means that if $P_{f}$ is close to $1$ the perturbation had a strong effect on the system, so is likely that the final state of the system after the evolution is $\ket{\Psi_f}$.

## Dipole in an electric field
If we immagine the perturbation generated by an incoming photon the electric field can be expressed as:
$$ 
\xi_{ph} = \bar{\xi_{0}} \cdot [ e^{i(\bar{k}⋅\bar{r}−ωt)}+e^{-i(\bar{k}⋅\bar{r}−ωt)}]
$$ where :
- $\xi_0$ is a complex vector representing the amplitude and phase of the electric field.
- $e^{i(\bar{k}⋅\bar{r}−ωt)}$ and $e^{-i(\bar{k}⋅\bar{r}−ωt)}$ are the terms representing the spatial and temporal variations of the electric field due to the photon's propagation

A dipole consists of two charges of opposite polarity separated by a distance $d$. When a photon (an electromagnetic wave) interacts with a dipole, the varying electric field of the photon exerts forces on these charges producing a perturbation.

The perturbation potential can be express as 
$$
\begin{align} \\
&\hat{V}(t) = -\bar{p} \cdot \bar{\xi}_{ph} 
\\ \\
&\bar{p} = Q \cdot d 
\end{align}
$$
where :
- $\bar{p}$ is the electric dipole moment.
- $Q$ is the value of the charges

So the probability amplitude $c_{f}​(t)$ for the transition from $\ket{i}$ to $\ket{f}$ at time $t$ is given by: 
$$
\displaylines{
c_{f}(t) = \frac{1}{i\hbar} \int_{0}^{t} V_{fi} (t') e^{ i E_{fi} ~ t /\hbar }\, dt' \\
\Downarrow\\
c_{f}(t) = \frac{1}{i\hbar} \int_{0}^{t} {\color{red} \braket{ \phi_{f}(\bar{r}) | -e \cdot \bar{r} \cdot \bar{\xi_{0}} \cdot [ e^{i(\bar{k}⋅\bar{r}−ωt)}+e^{-i(\bar{k}⋅\bar{r}−ωt)}] | \phi_{j}(\bar{r})}} e^{ i E_{fi} ~ t /\hbar }\, dt'
}
$$ 
>[!warning] Many steps are not reported in the following.

after several algebric steps we finally get 
$$
\begin{align}
\left| c_{f}(t) \right| ^{2} &= \frac{t^{2}}{\hbar^{2}} |M_{fi}|^{2} sinc^{2}\left[ (E_{fi} - \hbar \omega) \frac{t}{2\hbar} \right] +  \\
&+ \frac{t^{2}}{\hbar^{2}} |M_{if}|^{2} sinc^{2}\left[ (E_{fi} + \hbar \omega) \frac{t}{2\hbar} \right] + \\
&+ \cancelto{\simeq 0}{ \frac{2t^{2}}{\hbar^{2}} \cos\left( \frac{\omega t}{\hbar} \right) sinc\left[ (E_{fi} - \hbar\omega) \frac{t}{2\hbar} \right] \cdot sinc\left[ (E_{fi} + \hbar\omega) \frac{t}{2\hbar} \right] \cdot M_{fi} \cdot M_{if}^{*} }
\end{align}
$$
where:
- $M_{fi}$ is $\braket{ \phi_{f}(\bar{r}) | -e \cdot \bar{r} \cdot \bar{\xi_{0}} \cdot  e^{i\bar{k}⋅\bar{r}} | \phi_{i}(\bar{r})}$ 
- $M_{{\color{red} if}}$ is $\braket{ \phi_{{\color{red} i}}(\bar{r}) | -e \cdot \bar{r} \cdot \bar{\xi_{0}} \cdot  e^{i\bar{k}⋅\bar{r}} | \phi_{{\color{red} f}}(\bar{r})}$ 
  
<iframe src="https://www.desmos.com/calculator/es2d8sr5iz?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

By plotting the first term we can see that it has a spike where $\hbar\omega = E_{fi}$ (remember that $E_{fi} = E_{f} - E_{i}$). This means that the perturbation needs to have the "right" frequency to influence the system in a meaningful way. We can also see that for short times the influence of the perturbation is smaller compared to longer times.
Plotting the second term alone shows similar result but when $\hbar\omega = -E_{fi}$.
The first case corresponds to the **absorption** of a photon (the system increases its energy), the second one, on the other hand, to the **emission** of a photon.
![[emission_absorbtion_perturbation.svg| center]]

#todo check the problem with the delta1

By calculating the transition rate we get the **Fermi golden rule**: 

$$
\begin{align}
&W_{fi} = \frac{2\pi}{\hbar} |M_{fi}|^{2} \delta(E_{f} - E_{i} {\color{red} -}  \hbar \omega) \qquad \text{(first term)} \\
&W_{if} = \frac{2\pi}{\hbar} |M_{fi}|^{2} \delta(E_{f} - E_{i} {\color{red} +}  \hbar \omega) \qquad \text{(second term)}
\end{align}
$$

#todo case for a complex system
## Electrons in a crystal

#todo %% improve drawing %%

![[electron in crystal temp.png|center|300]]

$$M_{fi} = \braket{ \phi_{f} | e \bar{r} \bar{\varepsilon}_0  e^{ \pm i \bar{k} \bar{r} }|\phi_{i}}$$

Since $\phi_{i}, \phi_{f}$ are typically **Bloch states** due to the fact that we are inside a crystal structure:

$$
\begin{align}
&\phi_{i}(\bar{r}) = \frac{1}{\sqrt{ V }} e^{ i \bar{k}_{i} \bar{r} } \cdot u_{k_{i}}(\bar{r}) \\
& \phi_{f}(\bar{r}) = \frac{1}{\sqrt{ V }} e^{  i \bar{k}_{f} \bar{r} } \cdot u_{k_{f}}(\bar{r})
\end{align} 
$$
we can rewrite $M_{fi}$ as 
$$M_{fi} = \frac{e}{V}\int u^{*}_{k_{f}}(\bar{r}) \ u_{k_{i}}(\bar{r})\  \bar{r}\  \bar{\varepsilon}_0 \ e^{(\bar{k}_{f}-\bar{k}_{i} \pm \bar{k})\ \bar{r}} d\bar{r}$$
When a photon is absorbed or emitted by a material, it can cause an electron to transition from one state to another. 

There are two key constraints governing this transition:
- **Energy conservation**: The energy difference between the initial and final states $\Delta𝐸 = E_{f} - E_{i}$ is related to the photon's energy $\Delta E = \hbar\omega$
- **Momentum conservation**: The change in the wavevector $k=k_{f}-f_{i}$ caused by the transition is equal to the absorbed photon's wavevector$$ \hbar k_{f}-\hbar k_{i}=\pm\hbar k $$the change in momentum resulting from photon-induced transitions is negligible $k \approx 0$

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
