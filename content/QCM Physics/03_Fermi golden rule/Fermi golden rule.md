The [[#Density of states (DOS)]] can be written in another equivalent form 

$$
D(E) = \sum_{n} \delta(E - E_{n})
$$

which, differently from the one seen previously, is not normalized to volume. From the two formulas we can calculate 

$$
\begin{align}
&N(E) = V \int_{E_{1}}^{E_{2}} D(E) \, dE && \tag{1}
\\
&N(E) = \int_{E_{1}}^{E_{2}} \sum_{n} \delta(E - E_{n}) \, dE && \tag{2}
\end{align}
$$

## Perturbation theory

#todo
%% ???? %%

$$
\hat{H}_{0} \Phi_{i} (\bar{r}, t) = E_{i} \Phi_{i} (\bar{r}, t)
$$

If the Hamiltonian is time independent we can write 

$$
\Phi_{i}(\bar{r}, t) = \phi_{i}(\bar{r}) e^{ -i( E_{i}/\hbar) t } \quad \text{(stationary state)}
$$

When the system is perturbed with a perturbation $\hat{V}$, the Hamiltonian changes 

$$
\hat{H} = \hat{H}_{0} + \hat{V}(t)
$$

We have to find $\Psi (\bar{r}, t)$ that describes the system after the perturbation: 

$$
\hat{H} \Psi(\bar{r}, t) = i \hbar \frac{ \partial \Psi(\bar{r}, t) }{ \partial t } \quad \text{(time dependant S.E.)}
$$

Since $\Phi_{i}$ is a base of the Hilbert space (???) we can write 

$$
\Psi(\bar{r}, t) = \sum_{j} {\color{red}  c_{j}(t)}  \Phi_{j} (\bar{r}, t)
$$

where the coefficient $c_{j}$ must introduce the time dependance in the wave function.

> [!warning] Many steps are not reported in the following.

By substituting the wave function into the time dependant S.E. we get 

$$
\frac{ \partial c_{f}(t) }{ \partial t } = \frac{1}{i \hbar} \sum_{j} c_{j}(t) \cdot V_{fj}(t) ~ e^{ i (E_f - E_{j}) t /\hbar } \tag{3}
$$

Where 

$$
V_{fj}(t) = \braket{ \phi_{f}(\bar{r}) | \hat{V}(t) | \phi_{j}(\bar{r}) } 
$$
can be calculated since both the perturbation $\hat{V}$ and $\phi$ are known.

### First order perturbation theory

To solve equation $\eqref{3}$ we need to make some assumptions: we suppose that the perturbation is so small that the system hasn't evolved too much. This allows to approximate all $c_{j} = 0$ except for the first one: 

$$
\begin{align}
& c_{i}(t \simeq 0) = 1 && \text{(} i = \text{initial)} \\
&c_{j}(t \simeq 0) = 0 && j \neq i
\end{align}
$$

With this approximation we can rewrite $\eqref{3}$ as 

$$
\displaylines{
\frac{ \partial c_{j}(t) }{ \partial t } = \frac{1}{i \hbar} 1 \cdot V_{fi}(t) e^{ i(\overbrace{ E_{f} - E_{i}}^{ E_{fi} }) t /\hbar } \\
\Downarrow\\
c_{f}(t) = \frac{1}{i\hbar} \int_{0}^{t} V_{fi} (t') e^{ i E_{fi} ~ t /\hbar }\, dt'
}
$$

The probability of finding the system in a given (final) state is:

$$
P_{f} = |c_{f}(t)|^{2} = \frac{1}{\hbar^{2}} \cdot \left|\int_{0}^{t} V_{fi}(t') e^{ i E_{fi} t' /\hbar } \, dx \right|^{2} 
$$

While the **transition rate** is:

$$
W_{fi} = \frac{ \partial P_{f} }{ \partial t } 
$$

This means that if $P_{f}$ is close to $1$ the perturbation had a strong effect on the system.

## Dipole in an electric field

#todo dipole in electric field ?? why is $c_{f}(t)$ in that way?

---

We finally get 

$$
\begin{align}
\left| c_{f}(t) \right| ^{2} &= \frac{t^{2}}{\hbar^{2}} |M_{fi}|^{2} sinc^{2}\left[ (E_{fi} - \hbar \omega) \frac{t}{2\hbar} \right] +  \\
&+ \frac{t^{2}}{\hbar^{2}} |M_{if}|^{2} sinc^{2}\left[ (E_{fi} + \hbar \omega) \frac{t}{2\hbar} \right] + \\
&+ \cancelto{\simeq 0}{ \frac{2t^{2}}{\hbar^{2}} \cos\left( \frac{\omega t}{\hbar} \right) sinc\left[ (E_{fi} - \hbar\omega) \frac{t}{2\hbar} \right] \cdot sinc\left[ (E_{fi} + \hbar\omega) \frac{t}{2\hbar} \right] \cdot M_{fi} \cdot M_{if}^{*} }
\end{align}
$$

<iframe src="https://www.desmos.com/calculator/es2d8sr5iz?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

By plotting the first term we can see that it has a spike where $\hbar\omega = E_{fi}$ (remember that $E_{fi} = E_{f} - E_{i}$). This means that the perturbation needs to have the "right" frequency to influence the system in a meaningful way. We can also see that for short times the influence of the perturbation is smaller compared to longer times.
Plotting the second term alone shows similar result but when $\hbar\omega = -E_{fi}$.
The first case corresponds to the **absorption** of a photon (the system increases its energy), the second one, on the other hand, to the **emission** of a photon.

#todo check the problem with the delta

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

![[electron in crystal temp.png|300]]

$$M_{fi} = \braket{ \phi_{f} | e \bar{r} \bar{\varepsilon}_0  e^{ \pm i \bar{k} \bar{r} }|\phi_{i}}$$

Since $\phi_{i}, \phi_{f}$ are typically **Bloch states**:

$$
\begin{align}
&\phi_{i}(\bar{r}) = \frac{1}{\sqrt{ V }} e^{ i \bar{k}_{i} \bar{r} } \cdot u_{k_{i}}(\bar{r}) \\
& \phi_{f}(\bar{r}) = \frac{1}{\sqrt{ V }} e^{  i \bar{k}_{f} \bar{r} } \cdot u_{k_{f}}(\bar{r})
\end{align} 
$$

#todo what are we doing??

