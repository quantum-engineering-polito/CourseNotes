---
nextnote: 
author: 
authorlink: 
draft: false
---
When working with an RF circuit we can identify different operating regimes depending on the ratio between the wavelength of the signal $\lambda$ and the size of the circuit $L$:

1) $L/\lambda \ll 1$: **quasi static regime** (we can use lumped parameters)
2) $L /\lambda \simeq 1 \quad (L > \lambda / 10)$: **Resonant regime** (we can use transmission line theory)
3) $L /\lambda \gg 1$: **Optical regime**

It is important to notice that if we use a low frequency square wave, this doesn't mean that we can use lumped parameters because the sharp transition of the square wave require very high frequencies to be correctly represented.

Since the length of the transmission line is much bigger than its width we will consider our analysis as 1D.

# Transmission line model

The transmission line is modelled as shown in the sketch below and its circuit representation is as follows:

![[TL circuit.svg|500]]

Where 

$$
\begin{align}
& L_0 &&[A/m] \\
& R_0 && [\Omega /m] \\
& G_0 &&[\Omega/m] \\
& C_0 &&[F/m] \\
\end{align}
$$

## Single section

![[TL section.svg|500]]

To study the behaviour of the transmission line we study a single section of length $\Delta z$ as $\Delta z \to 0$.

We use Kirchhoff laws to find the relation between tension and current: 

$$
\begin{align}
\Delta v(z,t) &= v(z +\Delta z, t) - v(z,t) \\
&= -R_0 \Delta z i(z,t) - L_0 \Delta z \frac{ \partial v(z,t) }{ \partial t }  \\
 \\
\Delta i(z,t) &= i(z + \Delta z, t)   - i(z,t)  \\
& = -G_0 \Delta z \cdot v(z,t) - C_0 \Delta z \frac{ \partial v(z,t) }{ \partial t } 
\end{align}
$$
>[!note]

Dividing by $\Delta z$ both sides and taking the limit for $\Delta z \to 0$ we get 

$$
\lim_{ \Delta z \to 0 } \frac{\Delta v}{\Delta z} =\frac{ \partial v }{ \partial t }  = -R_0 \cdot i - L_0 \frac{ \partial i }{ \partial t } 
$$

$$
\lim_{ \Delta z \to 0 } \frac{\Delta i}{\Delta z} =\frac{ \partial i }{ \partial t }  = -G_0 \cdot v - C_0 \frac{ \partial v }{ \partial t } 
$$

The equations above are called **Telegrapher's equations**.

We now want to get the second derivative of tension and current with respect to $z$.

$$
\begin{align}
\frac{ \partial^{2} v }{ \partial z^{2} } &= -R_0 \frac{ \partial i }{ \partial t } -L_0 \frac{ \partial }{ \partial t } \left[ \frac{ \partial i }{ \partial t }  \right]  \\
& = \dots \quad\text{(substitute and rearrange)}\\
& = R_0G_0 \cdot v + \big(L_0 G_0 + R_0C_0\big) \frac{ \partial v }{ \partial t} + L_0C_0 \frac{ \partial^{2} v }{ \partial t^{2} }  
\end{align} 
$$

$$
\begin{align}
\frac{ \partial^{2} i }{ \partial z^{2} } = \dots = L_0C_0 \frac{ \partial^{2} i }{ \partial t^{2} } + \big(L_0G_0 + R_0C_0\big) \frac{ \partial i }{ \partial t } + R_0 G_0 \cdot i
\end{align}
$$

## Lossless lines

We will only focus on the case where there is no dissipation in the lines (i.e. $R_0 = G_0 = 0$). In this particular case we get the following, simplified, equations (obtained from the ones above):

#todo 

