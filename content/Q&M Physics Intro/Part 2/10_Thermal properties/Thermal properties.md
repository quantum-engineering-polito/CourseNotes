---
nextnote: 
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
>[!quote] Kittel, 5

In solids, the heat capacity is defined as 

$$
C_{V} = \left( \frac{ \partial U }{ \partial T}  \right)_{\mathbf{V}}
$$

where $U$ is the energy of the system and $T$ is the temperature.

In a [[Free electron model|previous lecture]] we evaluated the contribution of the electrons to the heat capacity, getting that their contribution is minimal. What we want to do now is to calculate the contribution of the phonons to the heat capacity ($C_\text{lat}$); to do this we need to calculate the total energy $U$ of the phonons. This can be obtained as a summation of the energies over all the possible wave vectors $\vec{q}$ and polarizations $\vec{p}$ ( #todo when did we talk about polarization???). 

$$
U = \sum_{\vec{q}} \sum_{p} U_{\vec{q},p} = \sum_{\vec{q}} \sum_{p} \langle n_{\vec{q},p} \rangle \hbar \omega_{\vec{q},p} \tag{1}
$$

where $<n_{\vec{q},p}>$ is the occupation probability at thermal equilibrium for phonons with wave vector $\vec{q}$ and polarization $p$. 

$<n_{\vec{q}, p}>$ follows a Bose Einstein distribution: 

$$
\langle n \rangle = \frac{1}{e^{ \hbar\omega/k_{B}T} - 1} \tag{2}
$$

The shape of $<n>$ is reported below


![[bose einstein n.png|300]]

From equation $(1)$ we can transform the summation over $\vec{q}$ in an integral by introducing the **phononic density of states** $D_{p}(\omega)$ which represents the number of phononic states per unit frequency 

$$
\boxed{D_{p}(\omega) = \frac{dN}{d\omega}}
$$

this means that the number of states between $\omega$ and $\omega + d\omega$ is given by (rearranging the formula above): 

$$
dN = D_{p}(\omega) ~d\omega
$$

this consideration allows us to rewrite $(1)$ as 

$$
U = \sum_{p} \int \frac{D_{p}(\omega)\hbar\omega}{e^{ \hbar\omega/k_{B}T } - 1} \, d\omega \tag{3}
$$

which can now be derived to obtain the heat capacity: 

$$
\begin{align}
C_\text{lat} &= \frac{ \partial U }{ \partial T } \bigg|_{\mathbf{V}}  \\
&= \sum_{p} \int D_{p}(\omega) \hbar\omega \frac{e^{ \hbar\omega/k_{B}T }}{(e^{ \hbar\omega/k_{B}T } - 1)^{2}} \frac{\hbar\omega}{k_{B}T^{2}} \, d\omega \tag{4}
\end{align}
$$

To further expand the integral we need to calculate $D_{p}$.

## Phononic density of states

#todo 

## Debye model 

>[!question] My guess
>to calculate Cv we still need to find the dispersion relation and thus we approximate it in different ways, one of which is the debye model?


In the Debye approximation we assume that the dispersion relation is **linear**: 

$$
\omega = v q
$$

where $v$ is the velocity of sound in the material and is assumed constant.

With these assumptions the DOS from above becomes 

$$
D(\omega) = \frac{\mathbf{V}}{(2\pi)^{3}} \frac{4 \pi q ^{2}}{v} \overset{ q = \omega/v }{ = } \frac{\mathbf{V}}{2\pi^{2}} \frac{\omega^{2}}{v^{3}}
$$

If we consider a monoatomic crystal with $N$ primitive cells, we expect to have 3 acoustic branches with $N$ independent states on every branch #todo  explain.

We will have a maximum allowed frequency (cutoff frequency) called **Debye frequency** #todo why?

Its values can be obtained like this #todo what is this?

$$
\begin{align}
3N &= 3 \int_{0}^{\omega_{D}}  D(\omega) \, d\omega  \\
&= 3 \int_{0}^{\omega_{D}} \frac{\mathbf{V}}{2\pi^{2}} \frac{\omega^{2}}{v^{2}} \, d\omega  \\
&= \frac{\mathbf{V} \omega_{D}^{3}}{2\pi^{2} v^{3}}
\end{align} \tag{5}
$$

$$
\boxed{ \omega_{D} = v\left( \frac{6 \pi^{2}N}{\mathbf{V}} \right)^{1/3} }
$$

From this we can also get the maximum allowed wavelength: 

$$
q_{D} = \frac{\omega_{D}}{v} = \left( \frac{6 \pi^{2} N}{\mathbf{V}} \right)^{1/3}
$$

We can now proceed to calculate the energy $U_{p}$ for a specific polarization 

$$
U_{p} = \int D(\omega) \langle n(\omega) \rangle  \hbar\omega \, d\omega = \int_{0}^{\omega_{D}} \left( \frac{\mathbf{V}\omega^{2}}{2\pi^{2} v ^{3}} \right) \frac{\hbar\omega}{e^{ \hbar\omega /k_{B}T }} - 1 \, d\omega 
$$

Supposing that all polarization have the same velocity ( #todo what does velocity have to do with this?) we get 

$$
\begin{align}
U &= 3 U_{p} \\
&= \frac{3\mathbf{V}\hbar}{2\pi^{2}v^{3}} \int_{0}^{\omega_{D}}  \frac{\omega^{3}}{e^{ \hbar\omega/k_{B}T } - 1} \, dx 
\end{align}
$$

If we define $x = \hbar\omega/k_{B}T$ and $x_{D} = \hbar\omega_{D}/k_{B}T = \theta_{D} /T$ we can rewrite the expression above as 

$$
\begin{align}
U &= \frac{3\mathbf{V} (k_{B}T)^{4}}{2\pi^{2}v^{3}\hbar^{3}} \int_{0}^{x_{D}} \frac{x^{3}}{e^{ x } - 1} \, dx  \\ \\

&\overset{ (5) }{ = } 9N k_{B}T \left( \frac{T}{\theta_{D}} \right)^{3} \int_{0}^{x_{D}} \frac{x^{3}}{e^{ x } - 1}  \, dx 
\end{align} 
$$

$\theta_{D}$ is called **Debye temperature**: 

$$
\boxed{\theta_{D} =  \frac{\hbar \omega_{D}}{k_{B}}}
$$

### Finding the heat capacity

We can finally derivate the total energy we just found to get the heat capacity:

$$
C_{V}={\frac{\,\,3\mathbf{V}\hbar^{2}}{\,2\pi^{2}v^{3}k_{B}T^{2}}}\,\int_{0}^{w_{D}}d w\,{\frac{\omega^{4}\,e^{\hbar w/\tau}}{\left(e^{\hbar w/\tau}-1\right)^{2}}}=9N k_{B}{\left({\frac{T}{\theta_{D}}}\right)}^{3}\,\int_{0}^{x_{D}}d x\,{\frac{\,\,x^{4}\,e^{x\,}}{\left({e^{x}}-1\right)^{2}}}
$$

In the second step above we used the fact that $\mathbf{V} / 2\pi = 3Nv^{3} /\omega_{D}$

![[heat capacity.png|400]]

The plot above shows that the Debye heat capacity approaches a constant value equal to $3N k_{B}$ for $T \gg \theta_{D}$.


### Behaviour at low temperatures

In a [[Free electron model|previous lecture]], we saw that the contribution to the heat capacity **at low temperature** given by electrons is proportional to $T$ and we anticipated that the phonons contribution is proportional to $T^{3}$. We now want to prove this statement.

At very low temperatures ($T \ll \theta_{D}$) we can approximate $x_{D} = \theta_{D}/T$ with $\infty$ ($\theta_{D} \simeq 300 \div 400 K$ ). This means that we can recalculate the $C_{V}$ changing the upper limit in the integral to $\infty$. Doing this we get that 

$$
C_{V} = 234 N k_{B}\left( \frac{T}{\theta_{D}} \right)^{3} \propto T^{3}
$$

(the calculation is omitted, the important thing is that the integral doesn't depend on $T$ and thus doesn't change the $T^{3}$ term).


This result can be interpreted in the following way:

At temperature $T$, only the phonons with $\hbar \omega_{T} < k_{B}T$ will be excited