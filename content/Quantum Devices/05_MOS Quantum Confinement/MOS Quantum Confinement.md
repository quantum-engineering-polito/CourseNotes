## Quantum effects in MOSFETs

Due to the reduction in the device size, quantum effects become important in modern MOSFETs.
These effects are notable as the dimensions become comparable with the average thermal de Broglie wavelength 

$$
\frac{p^{2}}{2m}=\frac{3}{2}k_{B}T \implies \lambda_{th}=\sqrt{ \frac{h^{2}}{3m^{*}k_{B}T} }$$
assuming an electron effective mass $m^{*}\approx 0.1 m_{0}$, in Si the thermal length in in the order of 10nm.

## Particle confined in a 1D box

Considering a particle confined in an infinite rectangular 1D potential well, it is known that the confined particles can have only discrete energies $E_{n}$ 

$$
E_{n}-E_{min}=\frac{n^{2}\pi^{2}\hbar^{2}}{2m^{*}L^{2}}
$$
Quantum effects are significant when the ground state is higher than the average thermal energy (carriers cannot be promoted to higher states only by thermal motion)


$$
\begin{align}
\text{With  } k_{B}T&=4.16\times10^{-21}J \\
E_1=\frac{\pi^{2}\hbar^{2}}{2m^{*}L^{2}}>k_{B}T &\implies L<\sqrt{ \frac{\pi^{2}\hbar^2}{2m^{2}k_{B}T} }=12nm
\end{align}
$$

This means that particle confinement in nanometre scale regions is common in modern devices and thus, with the effective mass approximation, quantum structures can be studied using point mass quantum mechanics.

## Quantum Structures and Confinement

Starting from the 3D space increasing degrees of confinement are possible to limit free carrier motion:
- 1D confinement: Quantum Well, the potential well takes place in one spatial dimension only and carriers may move in the two other dimensions (2DEG)
- 2D confinement: Quantum Wire, the potential well takes place in two spatial directions and carriers may move in the third dimension (1DEG)
- 3D confinement: Quantum Dot, the potential well takes place in three spatial directions. Carriers cannot move unless for tunneling (0DEG)

Sometimes discretized energy levels are studied in the approximation of infinite wells while in reality wells are always of finite height.
This can lead to various effects, like the imperfect localization of carriers (spread of electrons' wavefunction) and the discretization of electrons' energy levels is limited to lower energies.

## 2D Electron Gas

In a macroscopic semiconductor devices, the carriers are in a large 3D crystal (infinite boundary>no confinement) The eigenstates are plane waves and the dispersion relation is:

$$
E(k)=E_{C}+\frac{{\hbar^{2}k_{x}^{2}+\hbar^{2}k_{y}^{2}+\hbar^{2}k_{z}^{2}}}{2m^{*}}
$$
Instead in the case of a 1D quantum confinement, assuming an infinite rectangular well along x, discretized energies appear in the conduction band corresponding to the discrete energies $E_{n}$. In the y and z directions carriers can freely move.

$$
\displaylines{
E_{n}=\frac{n^{2}\pi^{2}\hbar^{2}}{2Lm^{*}}\\\\E_{n}(k)=E_{C}+\frac{{\hbar^{2}k_{y}^{2}+\hbar^{2}k_{z}^{2}}}{2m^{*}}+E_{n}
}
$$
In a 2DEG the spectrum is discretized only in the direction transverse to motion. The allowed energies can be classified into sub-bands (but overall the energy spectrum is continuous) 
The wavefunction is 

$$
\psi_{n}(x,y,z)=\phi_{n}(x)e^{ik_{y}y}e^{ik_{z}z}
$$

The density of states is different from the 3D case


$$
\displaylines{
E(k)-E_{min}=\frac{p_{y}^{2}}{2m_{y}}+\frac{p_{z}^{2}}{2m_{z}}\\
\text{with}\space E_{min}=E_{C}+E_{n} 
}
$$

The relation above describes the energy of the carriers per each sub-band
Assuming the number of states proportional to the area on the $k_{y}-k_{z}$ plane in the interval of (E,E+dE) 